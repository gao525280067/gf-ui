import React from 'react';
import { PublishSubscribe } from 'gf-react-ui';

const Demo = () => {
  const [message, setMessage] = React.useState('');

  React.useEffect(() => {
    PublishSubscribe.subscribe('add', message => setMessage(message));
    PublishSubscribe.subscribe('add', message => setMessage(message + '2'));
    PublishSubscribe.subscribe('delete', (message, haha) => console.log(message, haha));
    PublishSubscribe.publish('add', '增加成功了');
    PublishSubscribe.publish('delete', '删除成功了', '哈哈');
  }, []);
  return <>{message}</>;
};

export default Demo;
