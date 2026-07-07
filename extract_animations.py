import os
import re

with open('app.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Extract the IIFE containing the animation logic
match = re.search(r'\(function\(\) \{(.*?)\}\)\(\);', content, re.DOTALL)
if match:
    animation_logic = match.group(1)
    
    with open('js/animations.js', 'w', encoding='utf-8') as f:
        f.write('export function initAnimations() {\n')
        f.write(animation_logic)
        f.write('\n}\n')
    print("Animation logic extracted.")
else:
    print("Could not find animation IIFE.")
