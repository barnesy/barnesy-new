import os
import re

html_files = [f for f in os.listdir('.') if f.endswith('.html')]

for html_file in html_files:
    with open(html_file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Replace <script src="app.js"></script> with <script type="module" src="js/main.js"></script>
    new_content = content.replace('<script src="app.js"></script>', '<script type="module" src="js/main.js"></script>')
    
    with open(html_file, 'w', encoding='utf-8') as f:
        f.write(new_content)
        
print("JS script tags updated.")
