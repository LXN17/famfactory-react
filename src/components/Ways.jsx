import React from "react";

const Ways = () => {
  return (
    <section
      className="ways"
      style={{
        marginTop: 100,
        marginBottom: 300,
        display: "flex",
        justifyContent: "center",
        backgroundColor: "white",
      }}
    >
      <div className="ways-inner" style={{ width: 1129 }}>
        <h2 style={{ textAlign: "center", fontSize: 48 }}>
          Способы нанесения принтов и вышивка
        </h2>
        <div className="ways-list" style={{ display: "flex", gap: 34 }}>
          <div className="ways-list__element">
            <img src="/images/way_element1.png" alt="Шелкография" />
            <h3 style={{ textAlign: "center", fontSize: 20 }}>Шелкография</h3>
            <p style={{ textAlign: "center" }}>
              Трафаретная печать подходит для нанесения почти на любых изделиях:
              футболках, толстовках, свитшотах и т.д. Принты, сделанные данным
              способом, имеют высокую износостойкость, не требуют особого ухода
              и прослужат довольно долго.
            </p>
          </div>
          <div className="ways-list__element">
            <img src="/images/way_element2.png" alt="Вышивка на одежде" />
            <h3 style={{ textAlign: "center", fontSize: 20 }}>
              Вышивка на одежде
            </h3>
            <p style={{ textAlign: "center" }}>
              Один из самых интересных способов нанесения изображения на одежду.
              Вышивка долговечна, без проблем переносит механические
              воздействия. Данный вид нанесения выглядит наиболее эффектно и
              прослужит дольше всего.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ways;
