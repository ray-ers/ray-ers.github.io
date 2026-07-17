---
layout: page
title: Atelier
permalink: /atelier/
---

<section class="cv-section">
    <p style="text-align: center;">
        Atelier is a visual record of places, journeys, and ordinary moments. Through photography, I explore how people inhabit landscapes, how cities change, and how my own way of seeing has developed over time.
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
            <p class="caption-meta">{{ item.date | date_to_long_string }}</p>
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
<br>
<br>
<hr class="paragraph-divider">
<section class="cv-section"> 
      <p style="text-align: center;">
          <i>Unless otherwise stated, all photographs and text are my own and may not be reproduced without permission.
        </i>
      </p>
</section>
