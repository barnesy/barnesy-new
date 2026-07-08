#!/usr/bin/env python3
"""Inline img/*.png references in deck.src.html as base64 data URIs -> deck.html.
Makes the deck a single self-contained file (no broken images in any viewer)."""
import base64, re, pathlib

root = pathlib.Path(__file__).parent
src = (root / "deck.src.html").read_text()

def inline(m):
    rel = m.group(2)
    p = root / rel
    data = base64.b64encode(p.read_bytes()).decode()
    ext = p.suffix.lstrip(".").lower()
    mime = {"jpg": "jpeg", "jpeg": "jpeg", "svg": "svg+xml"}.get(ext, ext)
    return f'{m.group(1)}="data:image/{mime};base64,{data}"'

# match src="img/..." or poster="img/..."
out = re.sub(r'(src|poster)="(img/[^"]+)"', inline, src)
(root / "deck.html").write_text(out)
print(f"deck.html written ({len(out)//1024} KB)")
