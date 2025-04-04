const { Builder, By, Key, until } = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");

(async function loginTest() {
  // Aponta para o chromedriver local (na mesma pasta do projeto)
  const service = new chrome.ServiceBuilder("./chromedriver");

  const options = new chrome.Options();
  options.addArguments("--start-maximized");

  let driver = await new Builder()
    .forBrowser("chrome")
    .setChromeOptions(options)
    .setChromeService(service)
    .build();

  try {
    await driver.get("https://google.com"); // Teste simples
    console.log("✅ Chrome abriu com sucesso e acessou o Google!");
    await driver.sleep(3000); // Espera 3 segundos pra você ver o navegador
  } catch (err) {
    console.error("❌ Erro ao abrir o navegador:", err);
  } finally {
    await driver.quit(); // Fecha o navegador após o teste
  }
})();
