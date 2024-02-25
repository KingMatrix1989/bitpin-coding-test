interface AppConfig {
  name: string;
  apiBaseUrl: string;
  github: {
    title: string;
    url: string;
  };
  author: {
    name: string;
    url: string;
  };
}

export const appConfig: AppConfig = {
  name: "BitPin",
  apiBaseUrl: "https://api.bitpin.ir/v1",
  github: {
    title: "React Shadcn Starter",
    url: "https://github.com/hayyi2/react-shadcn-starter",
  },
  author: {
    name: "hayyi",
    url: "https://github.com/hayyi2/",
  },
};
