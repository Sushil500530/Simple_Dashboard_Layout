
const MenuLinks = [
    {
        key: "home",
        label: "Home",
        isTitle: false,
        icon: "home",
        badge: { variant: "success", text: "02" },
        children: [
            {
                key: "hm-about",
                label: "About",
                url: "/about",
                parentKey: "home",
            },
            {
                key: "hm-contact",
                label: "Contact",
                url: "/contact",
                parentKey: "home",
            },
            {
                key: "hm-blog",
                label: "Blog",
                url: "/blog",
                parentKey: "home",
            },
            {
                key: "hm-services",
                label: "Services",
                url: "/services",
                parentKey: "home",
            },
            {
                key: "hm-more",
                label: "More",
                url: "/more",
                parentKey: "home",
            },
        ],
    },
    {
        key: "ds-addusers",
        label: "Add Users",
        isTitle: false,
        icon: "user",
        url: "/dashboard/add-users",
    },
    {
        key: "apps-chat",
        label: "Chat",
        isTitle: false,
        icon: "message-square",
        url: "/apps/chat",
    },
];


export { MenuLinks, };