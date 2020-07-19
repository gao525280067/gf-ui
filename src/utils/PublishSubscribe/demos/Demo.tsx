import React from 'react';
import { PublishSubscribe } from 'gf-react-ui';

PublishSubscribe.subscribe('add', message => console.log(message));
PublishSubscribe.subscribe('add', message => console.log(message + '2'));
PublishSubscribe.subscribe('delete', (message, haha) => console.log(message, haha));
PublishSubscribe.publish('add', '增加成功了');

const Demo = () => {
  React.useEffect(() => {
    PublishSubscribe.publish('delete', '删除成功了', '哈哈');
  }, []);
  return <>Demo</>;
};

export default Demo;
