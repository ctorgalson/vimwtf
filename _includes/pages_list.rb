{% for p in pages_list %}
  {% if group == null or group == p.group %}
  <li{% if page.url == p.url %} class="active"{% endif %}><a href="{{ p.url }}">{{ p.title }}</a></li>
  {% endif %}
{% endfor %}
{% assign pages_list = nil %}
{% assign group = nil %}
