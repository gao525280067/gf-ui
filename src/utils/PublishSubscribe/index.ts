export type PublishSubscribeCallback = (...payload: any[]) => void;

const subscribe = (
  type: string,
  cb: PublishSubscribeCallback,
  SubscriberMap: { [key: string]: any[] }
) => {
  if (SubscriberMap[type]) {
    if (!SubscriberMap[type].includes(cb)) {
      SubscriberMap[type].push(cb);
    }
  } else {
    SubscriberMap[type] = [cb];
  }
};

const unsubscribe = (
  type: string,
  cb: PublishSubscribeCallback,
  SubscriberMap: { [key: string]: any[] }
) => {
  if (SubscriberMap[type] || SubscriberMap[type].includes(cb)) return;
  const index = SubscriberMap[type].indexOf(cb);
  SubscriberMap[type].splice(index, 1);
};

const publish = (SubscriberMap: { [key: string]: any[] }, type: string, ...payload: any[]) => {
  if (!SubscriberMap[type]) return;
  SubscriberMap[type].forEach(cb => cb(...payload));
};

/**
 * 可使用静态方法，也可以做用实例方式
 * 表态方法不能访问实例属性和方法，但实例方法可以访问静态方法。
 * 这个是由于类加载静态属性和方法就可以使用了，而实例要先实例化。
 * 所以静态方法无法访问未实例化的属性和方法
 */

class PublishSubscribe {
  /**
   * 存储订阅
   */
  public static SubscriberMap: { [key: string]: any[] } = {};
  private _SubscriberMap: { [key: string]: any[] } = {};

  /**
   * 消息订阅
   * @param type
   * @param cb
   */
  public static subscribe(type: string, cb: PublishSubscribeCallback) {
    subscribe(type, cb, PublishSubscribe.SubscriberMap);
  }
  public subscribe(type: string, cb: PublishSubscribeCallback) {
    subscribe(type, cb, this._SubscriberMap);
  }

  /**
   * 消息退订
   * @param type
   * @param cb
   */
  public static unsubscribe(type: string, cb: PublishSubscribeCallback) {
    unsubscribe(type, cb, PublishSubscribe.SubscriberMap);
  }
  public unsubscribe(type: string, cb: PublishSubscribeCallback) {
    unsubscribe(type, cb, this._SubscriberMap);
  }

  /**
   * 发布消息
   * @param type
   * @param payload
   */
  public static publish(type: string, ...payload: any[]) {
    publish(PublishSubscribe.SubscriberMap, type, ...payload);
  }
  public publish(type: string, ...payload: any[]) {
    publish(this._SubscriberMap, type, ...payload);
  }
}

export default PublishSubscribe;
