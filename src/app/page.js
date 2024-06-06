import { getpost } from "../../_actions/postAction";

export default async function Home() {
  const { data, errMsg } = await getpost();
  if (errMsg)
    return <h1>{errMsg}</h1>
    console.log(data)
  return (
    <main>
      <h1>Food Devlivery Web/App</h1>
      {
        data.map(item => (
          <h1 key={item._id}>{item.name} {item.msg}</h1>
        ))
      }
    </main>
  );
}
