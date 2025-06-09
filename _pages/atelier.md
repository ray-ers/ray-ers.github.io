---
layout: page 
title: Atelier 
permalink: /atelier/
---
<div class="atelier-gallery"> 
<!-- Item 1 -->
<div class="atelier-item">
    <img src="{{ '/atelier/image1.jpeg' | relative_url }}" alt="A description of the first image">
    <div class="atelier-item__caption">
        <h3>Somewhere in Palawan.</h3>
        <p class="caption-meta">August 2023</p>
        <p>We went deeper down because we heard music playing somewhere</p>
    </div>
        
</div>
<!-- Item 2 -->
<div class="atelier-item">
    <img src="{{ '/atelier/image2.jpeg' | relative_url }}" alt="A description of the second image">
    <div class="atelier-item__caption">
        <p>And in Palawan they seem to have music everywhere.</p>
    </div>
</div>
<!-- Item 3 -->
<div class="atelier-item">
    <img src="{{ '/atelier/image3.jpeg' | relative_url }}" alt="A description of the third image">
    <div class="atelier-item__caption">
        <p>Scoring heat, radiant beam, shimmering wave - all perfect .</p>
    </div>
</div>
<!-- Item 4 -->

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
<!-- Add as many more items as you like... -->

