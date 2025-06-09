---
layout: page 
title: Atelier 
permalink: /atelier/
---
<div class="atelier-gallery"> 
<!-- Item 1 -->
<div class="atelier-item">
    <img src="{{ '/atelier/image1.jpeg' | relative_url }}" alt="Palawan water 1" loading="lazy">
    <div class="atelier-item__caption">
        <h3>Somewhere in Palawan.</h3>
        <p class="caption-meta">August 2023</p>
        <p>We went deeper down because we heard music playing somewhere</p>
    </div>
        
</div>
<!-- Item 2 -->
<div class="atelier-item">
    <img src="{{ '/atelier/image2.jpeg' | relative_url }}" alt="Palawan water 2" loading="lazy">
    <div class="atelier-item__caption">
        <h3>Somewhere in Palawan.</h3>
        <p class="caption-meta">August 2023</p>
        <p>And in Palawan, they seem to have music everywhere.</p>
    </div>
</div>
<!-- Item 3 -->
<div class="atelier-item">
    <img src="{{ '/atelier/image3.jpeg' | relative_url }}" alt="Palawan water 3" loading="lazy">
    <div class="atelier-item__caption">
        <h3>A beach in Palawan.</h3>
        <p class="caption-meta">August 2023</p>
        <p>Scoring heat, radiant beam, shimmering wave - all perfect .</p>
    </div>
</div>
<!-- Item 4 -->

<!-- This entire block for the hidden modal goes at the end of the file -->
<div class="atelier-modal-overlay">
    <div class="atelier-modal">
        <button class="atelier-modal__close" aria-label="Close modal">&times;</button>
           <!-- Arrows are placed here -->
        <button class="atelier-modal__prev" aria-label="Previous image">&#10094;</button>
        <button class="atelier-modal__next" aria-label="Next image">&#10095;</button>
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
<!-- Add as many more items as you like... -->
    
