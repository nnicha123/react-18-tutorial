function Message() {
  let count = 0;
  count++;
  console.log(count);
  return <div>Message {count}</div>;
  // const name = "Mosh";
  // if (name) return <h1>Hello World {name}</h1>;
  // return <h1>Hello World</h1>;
}

export default Message;
