#!/usr/bin/env python3
"""Add PDF bookmarks (outline) + document metadata to the rendered deck.
Clones the page tree so hyperlink annotations are preserved.
Usage: python3 finalize.py <input.pdf> <output.pdf>"""
import sys
from pypdf import PdfReader, PdfWriter

src, dst = sys.argv[1], sys.argv[2]

reader = PdfReader(src)
writer = PdfWriter(clone_from=reader)  # clone preserves links/annotations

# Outline: (title, 0-based page index)
OUTLINE = [
    ("Chris Barnes — I think in systems", 0),
    ("Platform to Product", 1),
    ("About OpenGov", 2),
    ("The Bet", 3),
    ("Impact", 4),
    ("01 · Foundation", 5),
    ("02 · Library", 6),
    ("03 · Adoption", 7),
    ("04 · Seamstress — prototyping agent", 8),
    ("05 · Front-end agent", 9),
    ("In Production — Government Artifacts", 10),
    ("What's Next", 11),
    ("Contact & interests", 12),
]
for title, page in OUTLINE:
    writer.add_outline_item(title, page)

writer.add_metadata({
    "/Title": "Platform to Product — OpenGov Case Study",
    "/Author": "Chris Barnes",
    "/Subject": "Design engineering case study — systems thinking at OpenGov",
    "/Keywords": ("design engineering, design systems, AI products, systems design, "
                  "product design, Chris Barnes, OpenGov, Capital Design System, "
                  "platform design, agent UX"),
    "/Creator": "Chris Barnes",
})

with open(dst, "wb") as f:
    writer.write(f)
print(f"finalized -> {dst} ({len(writer.pages)} pages, {len(OUTLINE)} bookmarks)")
