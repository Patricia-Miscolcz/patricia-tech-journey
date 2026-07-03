const fs = require("fs");
const path = require("path");

test("Dashboard deve conter as seções principais do portfólio", () => {
    const caminhoDashboard = path.join(__dirname, "../pages/dashboard.html");

    const html = fs.readFileSync(caminhoDashboard, "utf8");

    expect(html).toContain('class="hero-dashboard"');
    expect(html).toContain('class="sobre-mim"');
    expect(html).toContain('class="certificacoes"');
    expect(html).toContain('id="listaCertificados"');
    expect(html).toContain('class="badges-section"');
    expect(html).toContain('id="listaBadges"');
    expect(html).toContain('class="tecnologias"');
    expect(html).toContain('class="footer"');
});