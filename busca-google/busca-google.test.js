const { Builder, By, Key, until } = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");

(async function buscarNoGoogle() {
    const service = new chrome.ServiceBuilder("./chromedriver");

    const options = new chrome.Options();
    options.addArguments("--start-maximized");

    const driver = await new Builder()
        .forBrowser("chrome")
        .setChromeOptions(options)
        .setChromeService(service)
        .build();

    try {
        await driver.get("https://www.google.com/")
        console.log("🔍 Página do Google aberta!");

        try {
            const aceitarButton = await driver.findElement(By.xpath("//div[contains(text(), 'Aceitar tudo')]"));
            await aceitarButton.click();
            console.log("🍪 Aceitou os cookies.");
        } catch (e) {
            console.log("🍪 Sem aviso de cookies.");
        }

        await driver.findElement(By.name("q")).sendKeys("Selenium Webdriver", Key.RETURN);
        console.log("📝 Realizou a busca!")

        await driver.sleep(3000);

        const titulo = await driver.getTitle();
        console.log("🔎 Título atual da página:", titulo);

        if (titulo.includes("Selenium")) {
            console.log("✅ Resultado da busca apareceu com sucesso!");
        } else {
            console.log("⚠️ O título não contém 'Selenium'.");
        }

    } catch (err) {
        console.error("❌ Erro no teste de busca:", err);
    } finally {
        await driver.quit();
    }
})();