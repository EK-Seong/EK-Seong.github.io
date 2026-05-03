---
layout: page
permalink: /publications/
title: RESEARCH
description: My research focuses on time series econometrics and dynamic causal inference.
nav: true
nav_order: 2
---

<!-- _pages/publications.md -->

<!-- Bibsearch Feature -->

{% include bib_search.liquid %}

<div class="publications">

<h2 class="bibliography">Publications</h2>

{% bibliography --query @*[category=published] %}

<h2 class="bibliography">Work in Progress</h2>

{% bibliography --query @*[category=wip] --group_by none %}

</div>
