export const LANGUAGE_VERSIONS = {
  javascript: '18.15.0',
  typescript: '5.0.3',
  csharp: '6.12.0',
  python: '3.10.0',
  php: '8.2.3',
  golang: '1.16.2',
  cpp: '10.2.0',
  c: '10.2.0',
  swift: '5.3.3',
  java: '15.0.2',
  rust: '1.68.2',
}

export const LANGUAGES_DEFAULT_TEXT = {
  javascript: 'function sum(a, b) {\n  return a + b;\n}\n',
  typescript:
    'function greet(name: string): string {\n  return "Hello, " + name;\n}\n\nconst result: string = greet("World");\nconsole.log(result);\n',
  csharp:
    'using System;\n\nclass Program {\n  static void Main() {\n    Console.WriteLine("Hello, World!");\n  }\n}\n',
  python: 'def greet(name):\n  print("Hello, " + name)\n\ngreet("World")\n',
  php: '<?php\necho "Hello, World!";\n?>\n',
  golang:
    'package main\n\nimport "fmt"\n\nfunc main() {\n  fmt.Println("Hello, World!")\n}\n',
  cpp: '#include <iostream>\n\nint main() {\n  std::cout << "Hello, World!" << std::endl;\n  return 0;\n}\n',
  c: '#include <stdio.h>\n\nint main() {\n  printf("Hello, World!\\n");\n  return 0;\n}\n',
  swift:
    'import Foundation\n\nfunc greet() {\n  print("Hello, World!")\n}\n\ngreet()\n',
  java: 'public class HelloWorld {\n  public static void main(String[] args) {\n    System.out.println("Hello, World!");\n  }\n}\n',
  rust: 'fn main() {\n  println!("Hello, World!");\n}\n',
}
