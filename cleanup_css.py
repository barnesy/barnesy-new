import os
import re

html_files = [f for f in os.listdir('.') if f.endswith('.html')]

os.makedirs('css', exist_ok=True)
os.makedirs('css/pages', exist_ok=True)
os.makedirs('js', exist_ok=True)

for html_file in html_files:
    with open(html_file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    style_match = re.search(r'<style>([\s\S]*?)</style>', content)
    if style_match:
        css_content = style_match.group(1).strip()
        if not css_content:
            continue
            
        basename = os.path.splitext(html_file)[0]
        css_filename = f'css/pages/{basename}.css'
        
        with open(css_filename, 'w', encoding='utf-8') as f:
            f.write(css_content)
        
        link_tag = f'<link rel="stylesheet" href="css/pages/{basename}.css">'
        new_content = content.replace(style_match.group(0), link_tag)
        
        with open(html_file, 'w', encoding='utf-8') as f:
            f.write(new_content)
            
print("CSS extraction complete.")
