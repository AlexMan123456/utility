function createTemplateStringsArray(strings: readonly string[]): TemplateStringsArray {
  return Object.assign([...strings], { raw: [...strings] }) as TemplateStringsArray;
}

export default createTemplateStringsArray;
