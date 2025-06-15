---
layout: page
title: Atelier
permalink: /atelier/
---

<section class="cv-section">
    <p style="text-align: center;">
        This collection is a personal one. These photographs are not just my favorites—they are markers of change. Through them, I trace my journey in photography, my approach to storytelling, and the path of my own self-discovery.
    </p>
    <br>
    <p style="text-align: center;"> My materials are not to be used or reproduced without my explicit approval."
    </p>
</section>

<hr class="paragraph-divider">

<!-- Start of the gallery -->
<div class="atelier-gallery">
    <!-- This loop now sorts the collection by the 'order' number -->
    {% assign sorted_items = site.atelier_items | sort: 'order' %}
    {% for item in sorted_items %}
    <div class="atelier-item">
        <img src="{{ item.image_path | relative_url }}" alt="{{ item.alt_text }}" loading="lazy">
        <div class="atelier-item__caption">
            <h3>{{ item.location }}</h3>
            <p class="caption-meta">{{ item.date }}</p>
            <p>{{ item.description | newline_to_br }}</p>
        </div>
    </div>
    {% endfor %}
</div>

<!-- This entire block for the hidden modal goes at the end of the file -->
<div class="atelier-modal-overlay">
    <div class="atelier-modal">
        <button class="atelier-modal__close" aria-label="Close modal">&times;</button>
        <div class="atelier-modal__content">
            <div class="atelier-modal__image">
                <!-- The clicked image will be placed here by JavaScript -->
            </div>
            <div class="atelier-modal__text">
                <!-- The descriptive paragraph will be placed here by JavaScript -->
            </div>
        </div>
    </div>
</div>
