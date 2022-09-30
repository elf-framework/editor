import { useRootContext } from "@elf-framework/sapa";

export { Page };

function Page() {
  const { productId } = useRootContext("routeParams") || {};
  return (
    <div>
      <h1>
        23456 fsdjklafjdskfldsfj Welcome dkssu <h3>fdsfadsf</h3> 3333 2222{" "}
        {productId} fdsafdsf fdsfadsf 메롱 fkd lsjaflds fdsajfdsf jfkdlsaj
        smaple fkadlsjfk l sample fdsafdsf
        <p>만나서 반가워 23432434 </p>
      </h1>
      <h2>만나서 진짜 반가워요</h2>
    </div>
  );
}
