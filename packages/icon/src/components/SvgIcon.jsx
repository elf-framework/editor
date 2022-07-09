function makeElement (node) {
    return createElementJsx(node.tag, node.attributes, node.children.map(makeElement));
}

export function SvgIcon (node, props = {}){
    return <span class={`elf--icon ${node.theme}`} data-name={node.name}>
        <svg 
            {...node.icon.attributes}
            {...props}
        >
            {node.icon.children.map(makeElement)}
        </svg>

    </span>
}