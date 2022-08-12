import { useRootContext } from "@elf-framework/sapa";

export { Page };

function Page() {
  const { productId } = useRootContext("routeParams") || {};
  return (
    <div>
      <h1>Welcome {productId} 메롱  fkdlsjaflds jfkdlsaj fkadlsjfk l</h1>
    </div>
  );
}
