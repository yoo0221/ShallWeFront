export default function Calendar() {
  return (
    <div className="row">
      <div className="col-lg-6 mb-4 order-0">
        <div className="card">
          <h6 className="card-header">
            <strong>약속 캘린더</strong>
          </h6>
          <div className="card-body">
            <table id="calendar" className="calendar">
              <tr>
                <td>
                  {/* <label className="cal-btn" onclick="prevCalendar()"> */}
                  <label className="cal-btn">전</label>
                </td>
                <td align="center" id="tbCalendarYM" colSpan="5">
                  YYYY.MM
                </td>
                <td>
                  {/* <label className="cal-btn" onclick="nextCalendar()"> */}
                  <label className="cal-btn">후</label>
                </td>
              </tr>
              <tr>
                <td>
                  <font color="#ed2a61" />
                  SUN
                </td>
                <td>MON</td>
                <td>TUE</td>
                <td>WED</td>
                <td>THU</td>
                <td>FRI</td>
                <td>
                  <font color="#3c6ffa" />
                  SAT
                </td>
              </tr>
            </table>
            <script>buildCalendar();</script>
          </div>
        </div>
      </div>

      <div className="col-lg-6 order-1">
        <div className="card col">
          <div className="table-responsive text-nowrap">
            <table className="table table-hover">
              <tbody className="table-border-bottom-0">
                {/* {% for user in users %}
              <tr>
                <td>
                  {% if user.userprofile.get_photo_home_url %}
                  <div class="container">
                    <a href="{% url 'detail_profile' %}">
                    <div class="row">
                      <div class="col-sm-3">
                        <label for="photo_img" class="avatar" tabindex="0">
                          <div class="avatar">
                            <img
                              src="{{ user.userprofile.get_photo_home_url }}"
                              alt
                              class="w-px-40 h-auto rounded-circle"
                            />
                          </div>
                        </label>
                      </div>
                      <div class="col-sm-9">
                        <div class="row">
                          <div class="col-4 col-sm-4">
                            <img src="{% static 'assets/img/미국 1.png' %}" alt="">
                            <strong>{{user.name}}</strong>
                          </div>
                          <div class="col-4 col-sm-4">
                            <img src="{% static 'assets/img/mothertongue.png'%}"><strong>{{user.mother_tongue}}</strong>
                          </div>
                          <div class="col-4 col-sm-4">
                            <img src="{% static 'assets/img/location.png'%}"><strong>{{user.address_emd}}</strong>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-4 col-sm-12">
                            {% if user.userprofile.introduction %}
                              {{user.userprofile.introduction}}
                            {% endif %}
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                  </div>

                  {% else %}
                  <div class="container">
                    <a href="{% url 'detail_profile' %}">
                    <div class="row">
                      <div class="col-sm-3">
                        <label for="photo_img" class="avatar" tabindex="0">
                          <div class="avatar">
                            <img
                              src="{% static 'assets/img/ordinary_profile_photo.png' %}"
                              alt
                              class="w-px-40 h-auto rounded-circle"
                            />
                          </div>
                        </label>
                      </div>
                      <div class="col-sm-9">
                        <div class="row">
                          <div class="col-4 col-sm-4">
                            <img src="{% static 'assets/img/미국 1.png' %}" alt="">
                            <strong>{{user.name}}</strong>
                          </div>
                          <div class="col-4 col-sm-4">
                            <img src="{% static 'assets/img/mothertongue.png'%}"><strong>{{user.mother_tongue}}</strong>
                          </div>
                          <div class="col-4 col-sm-4">
                            <img src="{% static 'assets/img/location.png'%}"><strong>{{user.address_emd}}</strong>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-4 col-sm-12">
                            {% if user.userprofile.introduction %}
                              {{user.userprofile.introduction}}
                            {% endif %}
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                  </div>
                  {% endif %}
                </td>
              </tr>
              {% endfor %} */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
