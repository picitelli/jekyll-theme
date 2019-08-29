---
title: Team
date: 2019-08-29 18:36:00 Z
permalink: "/team"
position: 2
hero:
  title: Our Team
is in navigation: true
---

{% assign sorted_team = site.team | sort:"position" %}
{% for member in sorted_team %}
  <div>
    <h2>{{ member.title }}</h2>
    <p>{{ member.position }}</p>
    {{ member.content | markdownify }}
  </div>
{% endfor %}