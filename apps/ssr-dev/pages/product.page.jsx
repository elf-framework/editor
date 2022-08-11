import { useRootContext } from "@elf-framework/sapa";

export { Page };

function Page() {
  const { productId } = useRootContext("routeParams") || {};
  return (
    <div>
      <h1>Welcome {productId} 메롱</h1>
    </div>
  );
}
