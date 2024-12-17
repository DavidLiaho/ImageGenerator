class AppConfig {
    public readonly dalleUrl = "https://api.openai.com/v1/images/generations";
    public readonly apiKey = process.env.REACT_APP_API_KEY;
}
export const appConfig = new AppConfig();
