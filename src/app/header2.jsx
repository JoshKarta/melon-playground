"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/menu";

export default function Header2({ className }) {
  const [active, setActive] = useState(null);
  const links = {
    single: {
      Navigation: [
        {
          label: "Sticky Cursor",
          href: "/sticky-cursor",
        },
        {
          label: "Curved Menu",
          href: "/curved-menu",
        },
      ],
    },
    grouped: {
      Templates: [
        {
          title: "Red theme",
          href: "/floating-nav",
          img: "",
          description: "Lorem ipsum odor amet, consectetuer adipiscing elit.",
        },
      ],
    },
  };
  return (
    <Menu setActive={setActive}>
      {/* <MenuItem setActive={setActive} active={active} item="Services">
        <div className="flex flex-col space-y-4 text-sm">
          <HoveredLink href="/web-dev">Web Development</HoveredLink>
          <HoveredLink href="/interface-design">Interface Design</HoveredLink>
          <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
          <HoveredLink href="/branding">Branding</HoveredLink>
        </div>
      </MenuItem>
      <MenuItem setActive={setActive} active={active} item="Products">
        <div className="  text-sm grid grid-cols-2 gap-10 p-4">
          <ProductItem
            title="Algochurn"
            href="https://algochurn.com"
            src="https://assets.aceternity.com/demos/algochurn.webp"
            description="Prepare for tech interviews like never before."
          />
          <ProductItem
            title="Tailwind Master Kit"
            href="https://tailwindmasterkit.com"
            src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
            description="Production ready Tailwind css components for your next project"
          />
          <ProductItem
            title="Moonbeam"
            href="https://gomoonbeam.com"
            src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
            description="Never write from scratch again. Go from idea to blog in minutes."
          />
          <ProductItem
            title="Rogue"
            href="https://userogue.com"
            src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
            description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
          />
        </div>
      </MenuItem>
      <MenuItem setActive={setActive} active={active} item="Pricing">
        <div className="flex flex-col space-y-4 text-sm">
          <HoveredLink href="/hobby">Hobby</HoveredLink>
          <HoveredLink href="/individual">Individual</HoveredLink>
          <HoveredLink href="/team">Team</HoveredLink>
          <HoveredLink href="/enterprise">Enterprise</HoveredLink>
        </div>
      </MenuItem> */}
      {Object.entries(links).map(([category, items]) => {
        return Object.entries(items).map(([itemGroup, itemList]) => (
          <MenuItem
            key={itemGroup}
            item={itemGroup}
            setActive={setActive}
            active={active}
          >
            <div className="flex flex-col space-y-4 text-sm">
              {category === "single" &&
                itemList.map((item) => (
                  <HoveredLink key={item.href} href={item.href}>
                    {item.label}
                  </HoveredLink>
                ))}

              {category === "grouped" && (
                <div className="grid md:grid-cols-2 gap-10 p-4">
                  {itemList.map((item) => (
                    <ProductItem
                      key={item.href}
                      title={item.title}
                      href={item.href}
                      src={item.img}
                      description={item.description}
                    />
                  ))}
                </div>
              )}
            </div>
          </MenuItem>
        ));
      })}
    </Menu>
  );
}
