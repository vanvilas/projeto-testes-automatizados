const { Builder, By, until } = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");

(async function loginTest() {
  const service = new chrome.ServiceBuilder("./chromedriver");

  const options = new chrome.Options();
  options.addArguments("--start-maximized");

  let driver = await new Builder()
    .forBrowser("chrome")
    .setChromeOptions(options)
    .setChromeService(service)
    .build();

  try {
    // Abre o site de teste
    await driver.get("https://practicetestautomation.com/practice-test-login/");
    console.log("✅ Site de login carregado");

    // Preenche usuário
    await driver.findElement(By.id("username")).sendKeys("student");

    // Preenche senha
    await driver.findElement(By.id("password")).sendKeys("Password123");

    // Clica no botão de login
    await driver.findElement(By.id("submit")).click();

    // Aguarda até o novo título indicar sucesso
    await driver.wait(until.titleContains("Logged In Successfully"), 5000);

    console.log("🎉 Login realizado com sucesso!");

    // Aguarda 3 segundos antes de fechar
    await driver.sleep(3000);
  } catch (err) {
    console.error("❌ Erro no teste de login:", err);
  } finally {
    await driver.quit();
  }
})();
