const translations = {
    en: {
        nav: {
            home: "Home",
            about: "About",
            services: "Services",
            contact: "Contact"
        },
        home: {
            title: "Welcome to TechVerse Innovations",
            description: "We are a leading technology company..."
        },
        about: {
            title: "About Us",
            description: "Learn more about our company and our mission..."
        },
        contact: {
            title: "Contact Us",
            nameLabel: "Name:",
            emailLabel: "Email:",
            submitButton: "Submit"
        },
        services: {
            title: "Our Services",
            service1: "Service 1",
            service2: "Service 2",
            service3: "Service 3"
        }
    },
    zh: {
        nav: {
            home: "主页",
            about: "关于我们",
            services: "服务",
            contact: "联系我们"
        },
        home: {
            title: "欢迎来到 TechVerse 创新公司",
            description: "我们是一家领先的科技公司..."
        },
        about: {
            title: "关于我们",
            description: "了解更多关于我们公司和我们的使命..."
        },
        contact: {
            title: "联系我们",
            nameLabel: "姓名：",
            emailLabel: "邮箱：",
            submitButton: "提交"
        },
        services: {
            title: "我们的服务",
            service1: "服务 1",
            service2: "服务 2",
            service3: "服务 3"
        }
    },
    jp: {
        nav: {
            home: "ホーム",
            about: "私たちについて",
            services: "サービス",
            contact: "お問い合わせ"
        },
        home: {
            title: "TechVerse イノベーションへようこそ",
            description: "私たちは最先端の技術企業です..."
        },
        about: {
            title: "私たちについて",
            description: "私たちの会社と使命についてもっと学びましょう..."
        },
        contact: {
            title: "お問い合わせ",
            nameLabel: "名前：",
            emailLabel: "メール：",
            submitButton: "送信"
        },
        services: {
            title: "私たちのサービス",
            service1: "サービス 1",
            service2: "サービス 2",
            service3: "サービス 3"
        }
    }
};

function changeLanguage(lang) {
    document.getElementById("nav-home").textContent = translations[lang].nav.home;
    document.getElementById("nav-about").textContent = translations[lang].nav.about;
    document.getElementById("nav-services").textContent = translations[lang].nav.services;
    document.getElementById("nav-contact").textContent = translations[lang].nav.contact;

    if (document.getElementById("home-title")) {
        document.getElementById("home-title").textContent = translations[lang].home.title;
        document.getElementById("home-description").textContent = translations[lang].home.description;
    }
    if (document.getElementById("about-title")) {
        document.getElementById("about-title").textContent = translations[lang].about.title;
        document.getElementById("about-description").textContent = translations[lang].about.description;
    }
    if (document.getElementById("contact-title")) {
        document.getElementById("contact-title").textContent = translations[lang].contact.title;
        document.getElementById("contact-name-label").textContent = translations[lang].contact.nameLabel;
        document.getElementById("contact-email-label").textContent = translations[lang].contact.emailLabel;
        document.getElementById("contact-submit-button").value = translations[lang].contact.submitButton;
    }
    if (document.getElementById("services-title")) {
        document.getElementById("services-title").textContent = translations[lang].services.title;
        document.getElementById("service1").textContent = translations[lang].services.service1;
        document.getElementById("service2").textContent = translations[lang].services.service2;
        document.getElementById("service3").textContent = translations[lang].services.service3;
    }

    localStorage.setItem("selectedLanguage", lang);
}

document.addEventListener("DOMContentLoaded", () => {
    const savedLang = localStorage.getItem("selectedLanguage") || "en";
    document.getElementById("languageSwitcher").value = savedLang;
    changeLanguage(savedLang);
});

document.getElementById("languageSwitcher").addEventListener("change", (e) => {
    changeLanguage(e.target.value);
});