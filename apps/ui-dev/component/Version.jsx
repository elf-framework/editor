export function DesignTokensVersion() {
  return <Version npmPackage={"@elf-framework/design-tokens"} />;
}

export function DesignSystemVersion() {
  return <Version npmPackage={"@elf-framework/design-system"} />;
}

export function SapaVersion() {
  return <Version npmPackage="@elf-framework/sapa" />;
}

export function UIVersion() {
  return <Version npmPackage="@elf-framework/ui" />;
}

export function EditorVersion() {
  return <Version npmPackage="@elf-framework/base-editor" />;
}

export function Version({ npmPackage }) {
  return (
    <span className="version">
      <span className="version__text">
        <a
          href={`https://www.npmjs.com/package/${npmPackage}`}
          target="_design_system"
        >
          <img src={`https://img.shields.io/npm/v/${npmPackage}`} />
        </a>
      </span>
    </span>
  );
}
