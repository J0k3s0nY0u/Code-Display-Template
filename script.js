const codeSnippets = [
    `// Hello World in JavaScript
console.log("Hello, World!");`,

    `# Hello World in Python
print("Hello, World!")`,

    `<!-- Hello World in HTML -->
<!DOCTYPE html>
<html>
<head>
    <title>Hello World</title>
</head>
<body>
    <h1>Hello, World!</h1>
</body>
</html>`,

    `/* Hello World in C */
#include <stdio.h>

int main() {
    printf("Hello, World!\\n");
    return 0;
}`
];

let currentIndex = 0;

function displayCodeSnippet(index) {
    const codeWindow = document.getElementById('codeWindow');
    codeWindow.textContent = codeSnippets[index];
}

document.getElementById('nextButton').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % codeSnippets.length;
    displayCodeSnippet(currentIndex);
});

// Display the first code snippet on page load
displayCodeSnippet(currentIndex);
