const CodeBlock = ({ soln }: { soln: string }) => {
  const keywords = [
    "break",
    "case",
    "class",
    "const",
    "continue",
    "default",
    "do",
    "else",
    "finally",
    "for",
    "function",
    "if",
    "in",
    "let",
    "of",
    "return",
    "switch",
    "this",
    "typeof",
    "while",

    "Math",
  ];

  const highlightCode = (code: string) => {
    const lines = code.split("\n").slice(1);
    const regex =
      /\b(const|let|var|class)\s+([a-zA-Z_$][a-zA-Z0-9_$]*)|([a-zA-Z_$][a-zA-Z0-9_$]*)\b/g;
    return lines
      .map((line, index) => {
        const lineNumber = index + 1 + ".";
        return (
          `<span class="text-white">${lineNumber
            .toString()
            .padStart(3, " ")}</span>` +
          line.replace(regex, (match, declaration, variable, keyword) => {
            if (declaration) {
              return `<span class="text-red-800">${declaration}</span> <span class="text-emerald-300">${variable}</span>`;
            } else if (keywords.includes(keyword)) {
              return `<span class="text-red-800">${keyword}</span>`;
            } else {
              return `<span class="text-white">${keyword}</span>`;
            }
          })
        );
      })
      .join("\n");
  };

  return (
    <pre>
      <code
        className="text-xl text-white"
        dangerouslySetInnerHTML={{ __html: highlightCode(soln) }}
      />
    </pre>
  );
};

export default CodeBlock;
