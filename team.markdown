---
title: Team
date: 2019-08-29 18:36:00 Z
permalink: "/team"
hero title: Our Team
is in navigation: true
---

{% for team_member in site.team %}
  <div>
    <h2>{{ team_member.title }}</h2>
    <p>{{ team_member.position }}</p>
    {{ team_member.content | markdownify }}
  </div>
{% endfor %}