"use client";
import React, { useContext, useRef } from "react";
import { Button } from "primereact/button";
import { useRouter } from "next/navigation";
import { StyleClass } from "primereact/styleclass";
import { LayoutContext } from "../../layout/context/layoutcontext";
import type { NodeRef, Page } from "@/types";
import { useSession, signOut } from "next-auth/react";

const LandingPage: Page = () => {
  const { layoutConfig } = useContext(LayoutContext);
  const { data: session } = useSession();
  console.log(session);

  const router = useRouter();
  const menuRef = useRef<HTMLButtonElement>(null);
  const statRef = useRef<HTMLAnchorElement>(null);
  const servicioRef = useRef<HTMLAnchorElement>(null);
  const featuresRef = useRef<HTMLAnchorElement>(null);
  const stats = useRef<HTMLDivElement | ScrollToOptions>(null);
  const features = useRef<HTMLDivElement | ScrollToOptions>(null);
  const servicio = useRef<HTMLDivElement | ScrollToOptions>(null);
  const path = "/layout/images/landing/";
  const image = "landing-header-2x.jpg";

  const navigateToHome = () => {
    router.push("/");
  };
  const navigateToRegister = () => {
    router.push("/login");
  };
  const navigateToDashboard = () => {
    router.push("/dashboard");
  };

  const scrollToElement = (el: React.RefObject<HTMLDivElement>) => {
    setTimeout(() => {
      el.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }, 200);
  };

  return (
    <>
      <div className="surface-ground min-h-screen w-screen">
        <div className="landing-wrapper">
          <div
            style={{
              backgroundImage: `url(${path}${image})`,
              backgroundPosition: "top left",
              backgroundRepeat: "no-repeat",
              minHeight: "1000px",
              backgroundSize: "cover",
            }}
            className="bg-no-repeat bg-cover bg-bottom"
          >
            <div className="header-menu-container flex align-items-center justify-content-between px-5 sm:px-8 py-6">
              <div className="header-left-elements flex align-items-center justify-content-between">
                <div className="cursor-pointer layout-topbar-logo flex align-items-center">
                  <img
                    src={
                      "/layout/images/logo-" +
                      (layoutConfig.colorScheme === "light"
                        ? "dark"
                        : "light") +
                      ".svg"
                    }
                    alt="logo"
                    style={{ height: "65px" }}
                  />

                  {/* <img
                    src={
                      "/layout/images/logoLetra-" +
                      (layoutConfig.colorScheme === "light"
                        ? "dark"
                        : "light") +
                      ".png"
                    }
                    alt="layout"
                    className="appname ml-2"
                    style={{ height: "30px" }}
                  /> */}
                </div>
                <ul
                  id="menu"
                  className="list-none lg:flex lg:flex-row flex-column align-items-start bg-white absolute lg:relative h-screen lg:h-auto lg:surface-ground m-0 z-5 w-full sm:w-6 lg:w-full py-6 lg:py-0"
                  style={{ top: "0px", right: "0%" }}
                >
                  <a
                    className="p-ripple cursor-pointer block lg:hidden text-gray-800 font-medium line-height-3 hover:text-gray-800 absolute"
                    style={{ top: "3rem", right: "2rem" }}
                  >
                    <i className="pi pi-times text-4xl"></i>
                  </a>
                  <li className="mt-5 lg:mt-0">
                    <a className="p-ripple flex m-0 lg:ml-5 lg:px-0 px-3 py-3 text-gray-800 font-medium line-height-3 hover:text-gray-800 cursor-pointer">
                      <span>Home</span>
                    </a>
                  </li>
                  <li>
                    <a className="p-ripple flex m-0 lg:ml-5 lg:px-0 px-3 py-3 text-gray-800 font-medium line-height-3 hover:text-gray-800 cursor-pointer">
                      <span>Meet Atlantis</span>
                    </a>
                  </li>
                  <li>
                    <a className="p-ripple flex m-0 lg:ml-5 lg:px-0 px-3 py-3 text-gray-800 font-medium line-height-3 hover:text-gray-800 cursor-pointer">
                      <span>Features</span>
                    </a>
                  </li>
                  <li>
                    <a className="p-ripple flex m-0 md:ml-5 md:px-0 px-3 py-3 text-gray-800 font-medium line-height-3 hover:text-gray-800 cursor-pointer">
                      <span>Pricing</span>
                    </a>
                  </li>
                  <li>
                    <a className="p-ripple flex m-0 md:ml-5 md:px-0 px-3 py-3 text-gray-800 font-medium line-height-3 hover:text-gray-800 cursor-pointer">
                      <span>Buy Now</span>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="header-right-elements flex align-items-center justify-content-between">
                <a className="font-medium text-gray-700 cursor-pointer">
                  <i className="pi pi-github text-gray-700 hover:text-gray-900 mr-3 text-xl"></i>
                </a>
                <a className="font-medium text-gray-700 cursor-pointer">
                  <i className="pi pi-twitter text-gray-700 hover:text-gray-900 mr-3 text-xl"></i>
                </a>
                <button
                  className="contact-button mr-3 p-button-outlined p-button-secondary p-button-text p-button p-component font-medium border-round text-gray-700 p-button p-component"
                  data-pc-name="button"
                  data-pc-section="root"
                  style={{ background: "rgba(68, 72, 109, 0.05)" }}
                >
                  <span aria-hidden="true" className="p-button-label">
                    Contact
                  </span>
                </button>
                <a className="p-ripple lg:hidden font-medium text-gray-700 cursor-pointer">
                  <i className="pi pi-bars fs-xlarge"></i>
                </a>
              </div>
            </div>
            {/* <div className="flex align-items-center justify-content-between px-5 sm:px-8 py-6">
              <a onClick={navigateToHome} className="cursor-pointer">
                <span className="text-2xl font-bold text-color ml-2">
                  ZARCOL
                </span>
              </a>

              <div className="relative">
                <StyleClass
                  nodeRef={menuRef as NodeRef}
                  selector="@next"
                  enterClassName="hidden"
                  enterActiveClassName="scalein"
                  leaveClassName="hidden"
                  leaveActiveClassName="fadeout"
                  leaveToClassName="hidden"
                  hideOnOutsideClick
                >
                  <button
                    ref={menuRef}
                    className="cursor-pointer block lg:hidden select-none p-link w-3rem h-3rem inline-flex align-items-center justify-content-center border-circle"
                  >
                    <i className="pi pi-bars text-4xl"></i>
                  </button>
                </StyleClass>
                <div
                  id="landing-menu"
                  className="hidden lg:block absolute right-0 top-auto lg:static z-1 shadow-2 lg:shadow-none w-15rem lg:w-auto surface-overlay lg:surface-ground origin-top p-3 lg:p-0"
                  style={{ borderRadius: "14px" }}
                >
                  <ul className="flex flex-column lg:flex-row m-0 p-0 list-none text-2xl lg:text-base">
                    <li>
                      <StyleClass
                        nodeRef={statRef as NodeRef}
                        selector="#landing-menu"
                        leaveActiveClassName="fadeout"
                        leaveToClassName="hidden"
                      >
                        <a
                          ref={statRef}
                          className="block p-3 cursor-pointer font-bold text-color-secondary hover:text-color transition-colors transition-duration-300"
                          onClick={() => scrollToElement(stats as any)}
                        >
                          INICIO
                        </a>
                      </StyleClass>
                    </li>
                    <li>
                      <StyleClass
                        nodeRef={featuresRef as NodeRef}
                        selector="#landing-menu"
                        leaveActiveClassName="fadeout"
                        leaveToClassName="hidden"
                      >
                        <a
                          ref={featuresRef}
                          className="block p-3 cursor-pointer font-bold text-color-secondary hover:text-color transition-colors transition-duration-300"
                          onClick={() => scrollToElement(features as any)}
                        >
                          CARACTERISTICAS
                        </a>
                      </StyleClass>
                    </li>
                    <li>
                      <StyleClass
                        nodeRef={servicioRef as NodeRef}
                        selector="#landing-menu"
                        leaveActiveClassName="fadeout"
                        leaveToClassName="hidden"
                      >
                        <a
                          ref={servicioRef}
                          className="block p-3 cursor-pointer font-bold text-color-secondary hover:text-color transition-colors transition-duration-300"
                          onClick={() => scrollToElement(servicio as any)}
                        >
                          SERVICIOS
                        </a>
                      </StyleClass>
                    </li>
                    {session && (
                      <li>
                        <a
                          className="block p-3 cursor-pointer font-bold text-color-secondary hover:text-color transition-colors transition-duration-300"
                          onClick={navigateToDashboard}
                        >
                          DASHBOARD
                        </a>
                      </li>
                    )}
                    <li>
                      {session ? (
                        <a
                          className="block p-3 cursor-pointer font-bold text-color-secondary hover:text-color transition-colors transition-duration-300"
                          onClick={() => signOut()}
                        >
                          SALIR
                        </a>
                      ) : (
                        <a
                          className="block p-3 cursor-pointer font-bold text-color-secondary hover:text-color transition-colors transition-duration-300"
                          onClick={navigateToRegister}
                        >
                          INGRESAR
                        </a>
                      )}
                    </li>
                  </ul>
                </div>
              </div>
            </div> */}

            <div className="header-text" style={{ padding: "100px 60px" }}>
              <h1
                className="mb-0 text-gray-800"
                style={{ fontSize: "80px", lineHeight: "95px" }}
              >
                This is Atlantis
              </h1>
              <h2 className="mt-0 font-medium text-4xl text-gray-700">
                Modern, fresh and groovy
              </h2>
              <Button
                icon="pi pi-arrow-right"
                label="Conoce más"
                className="p-button-text"
                iconPos="right"
              ></Button>
            </div>
            <div className="header-features" style={{ padding: "100px 60px" }}>
              <div className="grid flex">
                <div className="cardHeader col-12 md:col-6 lg:col-4 flex justify-content-center">
                  <div className="header-feature-box mr-3 mb-4 border-round-3xl p-5 text-white">
                    <span className="title mb-3 block text-2xl">
                      Responsive Layout
                    </span>
                    <span className="content">
                      View it on the web and mobile device. Prime premium themes
                      are ready for all devices.
                    </span>
                  </div>
                </div>
                <div className="cardHeader col-12 md:col-6 lg:col-4 flex justify-content-center">
                  <div className="header-feature-box mr-3 mb-4 border-round-3xl p-5 text-white">
                    <span className="title mb-3 block text-2xl">Fresh</span>
                    <span className="content">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor.
                    </span>
                  </div>
                </div>
                <div className="cardHeader col-12 md:col-6 lg:col-4 flex justify-content-center">
                  <div className="header-feature-box mr-3 mb-4 border-round-3xl p-5 text-white">
                    <span className="title mb-3 block text-2xl">
                      Modern Design
                    </span>
                    <span className="content">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor.
                    </span>
                  </div>
                </div>
                <div className="cardHeader col-12 md:col-6 lg:col-4 flex justify-content-center">
                  <div className="header-feature-box mr-3 mb-4 border-round-3xl p-5 text-white">
                    <span className="title mb-3 block text-2xl">
                      Clean code
                    </span>
                    <span className="content">
                      Our frontend is so easy to understand. If you want to
                      modify the code it’s an easy job for you. Our code is
                      clean and easy to read.
                    </span>
                  </div>
                </div>
                <div className="cardHeader col-12 md:col-6 lg:col-4 flex justify-content-center">
                  <div className="header-feature-box mr-3 mb-4 border-round-3xl p-5 text-white">
                    <span className="title mb-3 block text-2xl">Ready!</span>
                    <span className="content">
                      We work hard to write down all aspects of prime themes to
                      make sure that there is no unanswered questions left.
                    </span>
                  </div>
                </div>
                <div className="cardHeader col-12 md:col-6 lg:col-4 flex justify-content-center">
                  <div className="header-feature-box mr-3 mb-4 border-round-3xl p-5 text-white">
                    <span className="title mb-3 block text-2xl">
                      Well documented
                    </span>
                    <span className="content">
                      We work hard to write down all aspects of prime themes to
                      make sure that there is no unanswered questions left.
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="flex flex-column lg:flex-row gap-5 align-items-center justify-content-between px-5 sm:px-8 py-8 overflow-hidden">
              <div className="flex-1 fadein animation-duration-1000">
                <h1 className="font-bold text-7xl mt-0 mb-5">
                  PrimeTek Presents Verona
                </h1>
                <p className="text-3xl mb-5 line-height-3">
                  Minimal layout inspired by a beautiful city
                </p>
                <Button severity="danger" label="lo que yo quiera"></Button>
              </div>
              <div className="flex-1">
                <img
                  alt="intro image"
                  src="/layout/images/landing/screen.jpg"
                  className="fadeinright animation-ease-in-out animation-duration-1000 w-full border-round-2xl shadow-2"
                />
              </div>
            </div> */}
          </div>

          <div ref={stats as any} className="p-8">
            <div className="flex flex-column align-items-center mb-7">
              <span className="font-bold text-color-secondary text-2xl mb-3">
                ??????
              </span>
              <h2 className="font-bold text-6xl my-0">
                Todo lo que necesitas está aquí
              </h2>
            </div>
            <div className="flex flex-column xl:flex-row justify-content-center gap-5">
              <div
                className="surface-card text-center py-7 px-5 shadow-2"
                style={{ borderRadius: "14px" }}
              >
                <div className="text-xl text-color-secondary mb-3">
                  Certificados en
                </div>
                <h3 className="mt-0 mb-3 font-bold text-4xl">
                  Limpieza industrial
                </h3>
                <p className="line-height-3 mb-5 text-color-secondary">
                  Más de <strong>10</strong> de experiencia en el rublo.
                </p>
                <Button
                  icon="pi pi-arrow-right"
                  label="Conoce más"
                  className="p-button-text"
                  iconPos="right"
                ></Button>
                <div className="mt-8 xl:pt-8">
                  <img
                    alt="intro image"
                    src="/layout/images/landing/feature-components.svg"
                    className="w-9 md:w-4 xl:w-9"
                  />
                  <img
                    src={
                      "/layout/images/logo-" +
                      (layoutConfig.colorScheme === "light"
                        ? "dark"
                        : "light") +
                      ".svg"
                    }
                    alt="logo"
                    style={{ height: "52px" }}
                  />
                </div>
              </div>
              <div className="flex flex-column md:flex-row xl:flex-column gap-5">
                <div
                  className="flex-1 surface-card flex flex-column xl:flex-row xl:align-items-center justify-content-between py-7 px-5 shadow-2 gap-5"
                  style={{ borderRadius: "14px" }}
                >
                  <div className="flex-1 flex-order-1 xl:flex-order-0 text-center xl:text-left">
                    <img
                      alt="intro image"
                      src="/layout/images/landing/feature-blocks.svg"
                      className="w-9"
                    />
                  </div>
                  <div className="text-center xl:text-right flex-1">
                    <div className="text-xl text-color-secondary mb-3">
                      PrimeBlocks
                    </div>
                    <h3 className="mt-0 mb-3 font-bold text-4xl">
                      Save your time
                    </h3>
                    <p className="line-height-3 mb-5 text-color-secondary">
                      PrimeBlocks have <strong>370+</strong> blocks: hero
                      sections, servicio, footers and more....
                    </p>
                    <Button
                      icon="pi pi-arrow-right"
                      label="Browse Blocks"
                      className="p-button-text"
                      iconPos="right"
                    ></Button>
                  </div>
                </div>
                <div
                  className="flex-1 surface-card flex flex-column xl:flex-row xl:align-items-center justify-content-between py-7 px-5 shadow-2 gap-5"
                  style={{ borderRadius: "14px" }}
                >
                  <div className="text-center xl:text-left flex-1">
                    <div className="text-xl text-color-secondary mb-3">
                      PrimeIcons
                    </div>
                    <h3 className="mt-0 mb-3 font-bold text-4xl">
                      Enjoy 300+ Icons
                    </h3>
                    <p className="line-height-3 mb-5 text-color-secondary">
                      What you need in your app, you find any icon in
                      PrimeIcons.
                    </p>
                    <Button
                      icon="pi pi-arrow-right"
                      label="Explore Icons"
                      className="p-button-text"
                      iconPos="right"
                    ></Button>
                  </div>
                  <div className="flex-1 text-center xl:text-right">
                    <img
                      alt="intro image"
                      src="/layout/images/landing/feature-icons.svg"
                      className="w-9"
                    />
                  </div>
                </div>
              </div>
              <div
                className="surface-card text-center py-7 px-5 shadow-2"
                style={{ borderRadius: "14px" }}
              >
                <div className="text-xl text-color-secondary mb-3">
                  Theme Designer
                </div>
                <h3 className="mt-0 mb-3 font-bold text-4xl">
                  Design Your Own
                </h3>
                <p className="line-height-3 mb-5 text-color-secondary">
                  Limitless customization.
                </p>
                <Button
                  icon="pi pi-arrow-right"
                  label="View Designer"
                  className="p-button-text"
                  iconPos="right"
                ></Button>
                <div className="mt-8 xl:pt-8">
                  <img
                    alt="intro image"
                    src="/layout/images/landing/feature-designer.svg"
                    className="w-9 md:w-4 xl:w-9"
                  />
                </div>
              </div>
            </div>
          </div>
          <div ref={features as any} className="px-5 sm:px-8 py-8 surface-card">
            <div className="flex flex-column lg:flex-row justify-content-center gap-5">
              <div>
                <div
                  className="bg-orange-50 p-6 flex align-items-center justify-content-center mb-5"
                  style={{ borderRadius: "14px", borderTopLeftRadius: "5rem" }}
                >
                  <img
                    alt="intro image"
                    src="/layout/images/landing/icon-modern-responsive.svg"
                    className="h-6rem sm:h-12rem"
                  />
                </div>
                <h3 className="mt-0 mb-5 font-bold text-4xl">
                  Responsive Design
                </h3>
                <p className="line-height-3 text-color-secondary">
                  Nam non ligula sed urna malesuada lacinia. Aliquam sed viverra
                  ipsum.
                </p>
              </div>
              <div>
                <div
                  className="bg-green-50 p-6 flex align-items-center justify-content-center mb-5"
                  style={{ borderRadius: "14px" }}
                >
                  <img
                    alt="intro image"
                    src="/layout/images/landing/icon-modern-design.svg"
                    className="h-6rem sm:h-12rem"
                  />
                </div>
                <h3 className="mt-0 mb-5 font-bold text-4xl">Modern Design</h3>
                <p className="line-height-3 text-color-secondary">
                  Nam non ligula sed urna malesuada lacinia. Aliquam sed viverra
                  ipsum.
                </p>
              </div>
              <div>
                <div
                  className="bg-red-50 p-6 flex align-items-center justify-content-center mb-5"
                  style={{
                    borderRadius: "14px",
                    borderBottomRightRadius: "5rem",
                  }}
                >
                  <img
                    alt="intro image"
                    src="/layout/images/landing/icon-clean-code.svg"
                    className="h-6rem sm:h-12rem"
                  />
                </div>
                <h3 className="mt-0 mb-5 font-bold text-4xl">Clean Code</h3>
                <p className="line-height-3 text-color-secondary">
                  Nam non ligula sed urna malesuada lacinia. Aliquam sed viverra
                  ipsum.
                </p>
              </div>
            </div>
          </div>
          <div className="px-5 sm:px-8 py-8 surface-ground flex flex-wrap gap-5 align-items-center justify-content-between">
            <div className="text-4xl font-bold">Join the Prime Community</div>
            <Button label="Join Now" className="p-button-raised"></Button>
          </div>
          <div
            ref={servicio as any}
            className="px-5 sm:px-8 py-8 surface-card flex flex-column lg:flex-row justify-content-center gap-5"
          >
            <div className="shadow-2 surface-card p-5 text-center border-round-2xl">
              <img
                alt="intro image"
                src="/layout/images/landing/asset-free.svg"
                className="w-full sm:w-6 lg:w-full block mx-auto mb-5"
              />
              <div className="text-2xl font-bold mb-3">Free</div>
              <div className="mb-5">
                <span className="text-6xl font-bold">$0 </span>
                <span className="text-xl text-color-secondary">/month</span>
              </div>
              <a
                className="p-2 mb-5 font-bold block text-center cursor-pointer hover:surface-hover transition-colors transition-duration-300"
                style={{
                  borderRadius: "2rem",
                  boxShadow:
                    "0px 3px 4px rgba(0, 0, 0, 0.1), 0px 24px 36px rgba(0, 0, 0, 0.04)",
                }}
              >
                TRY NOW
              </a>
              <ul className="list-none p-0 m-0">
                <li className="flex align-items-center">
                  <i className="pi pi-check-circle text-green-500 text-xl mr-2"></i>
                  <span>Responsive Layout</span>
                </li>
              </ul>
            </div>
            <div className="shadow-2 surface-card p-5 text-center border-round-2xl">
              <img
                alt="intro image"
                src="/layout/images/landing/asset-premium.svg"
                className="w-full sm:w-6 lg:w-full block mx-auto mb-5"
              />
              <div className="text-2xl font-bold mb-3">Premium</div>
              <div className="mb-5">
                <span className="text-6xl font-bold">$9 </span>
                <span className="text-xl text-color-secondary">/month</span>
              </div>
              <a
                className="p-2 mb-5 font-bold block text-center cursor-pointer hover:surface-hover transition-colors transition-duration-300"
                style={{
                  borderRadius: "2rem",
                  boxShadow:
                    "0px 3px 4px rgba(0, 0, 0, 0.1), 0px 24px 36px rgba(0, 0, 0, 0.04)",
                }}
              >
                TRY NOW
              </a>
              <ul className="list-none p-0 m-0">
                <li className="flex align-items-center mb-3">
                  <i className="pi pi-check-circle text-green-500 text-xl mr-2"></i>
                  <span>Responsive Layout</span>
                </li>
                <li className="flex align-items-center mb-3">
                  <i className="pi pi-check-circle text-green-500 text-xl mr-2"></i>
                  <span>10000 Push Messages</span>
                </li>
                <li className="flex align-items-center">
                  <i className="pi pi-check-circle text-green-500 text-xl mr-2"></i>
                  <span>50 Support Tickets</span>
                </li>
              </ul>
            </div>
            <div className="shadow-2 surface-card p-5 text-center border-round-2xl">
              <img
                alt="intro image"
                src="/layout/images/landing/asset-enterprise.svg"
                className="w-full sm:w-6 lg:w-full block mx-auto mb-5"
              />
              <div className="text-2xl font-bold mb-3">Enterprise</div>
              <div className="mb-5">
                <span className="text-6xl font-bold">$19 </span>
                <span className="text-xl text-color-secondary">/month</span>
              </div>
              <a
                className="p-2 mb-5 font-bold block text-center cursor-pointer hover:surface-hover transition-colors transition-duration-300"
                style={{
                  borderRadius: "2rem",
                  boxShadow:
                    "0px 3px 4px rgba(0, 0, 0, 0.1), 0px 24px 36px rgba(0, 0, 0, 0.04)",
                }}
              >
                TRY NOW
              </a>
              <ul className="list-none p-0 m-0">
                <li className="flex align-items-center mb-3">
                  <i className="pi pi-check-circle text-green-500 text-xl mr-2"></i>
                  <span>Responsive Layout</span>
                </li>
                <li className="flex align-items-center mb-3">
                  <i className="pi pi-check-circle text-green-500 text-xl mr-2"></i>
                  <span>Unlimited Push Messages</span>
                </li>
                <li className="flex align-items-center mb-3">
                  <i className="pi pi-check-circle text-green-500 text-xl mr-2"></i>
                  <span>1000 Support Tickets</span>
                </li>
                <li className="flex align-items-center mb-3">
                  <i className="pi pi-check-circle text-green-500 text-xl mr-2"></i>
                  <span>Free Shipping</span>
                </li>
                <li className="flex align-items-center">
                  <i className="pi pi-check-circle text-green-500 text-xl mr-2"></i>
                  <span>Unlimited Storage</span>
                </li>
              </ul>
            </div>
          </div>
          <div
            className="px-5 sm:px-8 py-8 bg-gray-900 flex flex-column md:flex-row md:align-items-start gap-5"
            style={{
              borderTopLeftRadius: "14px",
              borderTopRightRadius: "14px",
            }}
          >
            <div className="flex align-items-center flex-1">
              <img
                alt="intro image"
                src="/layout/images/landing/logo-v.svg"
                className="w-4rem"
              />
              <span className="text-white text-5xl font-bold ml-2">Verona</span>
            </div>
            <div className="flex-1">
              <div className="text-xl text-gray-600 mb-4">LATEST</div>
              <ul className="list-none p-0 m-0">
                <li className="mb-3">
                  <a className="cursor-pointer text-white text-xl">Ultima</a>
                </li>
                <li className="mb-3">
                  <a className="cursor-pointer text-white text-xl">Apollo</a>
                </li>
                <li className="mb-3">
                  <a className="cursor-pointer text-white text-xl">Sakai</a>
                </li>
                <li className="mb-3">
                  <a className="cursor-pointer text-white text-xl">Diamond</a>
                </li>
                <li>
                  <a className="cursor-pointer text-white text-xl">Poseidon</a>
                </li>
              </ul>
            </div>
            <div className="flex-1">
              <div className="text-xl text-gray-600 mb-4">DEMOS</div>
              <ul className="list-none p-0 m-0">
                <li className="mb-3">
                  <a
                    href="https://www.primefaces.org/primeng"
                    className="cursor-pointer text-white text-xl"
                  >
                    PrimeNG
                  </a>
                </li>
                <li className="mb-3">
                  <a
                    href="https://www.primefaces.org/showcase"
                    className="cursor-pointer text-white text-xl"
                  >
                    PrimeFaces
                  </a>
                </li>
                <li className="mb-3">
                  <a
                    href="https://www.primefaces.org/primereact"
                    className="cursor-pointer text-white text-xl"
                  >
                    PrimeReact
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.primefaces.org/primevue"
                    className="cursor-pointer text-white text-xl"
                  >
                    PrimeVue
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-1 gap-4">
              <a href="http://github.com/primefaces">
                <i className="pi pi-github text-white text-5xl"></i>
              </a>
              <a href="https://discord.gg/gzKFYnpmCY">
                <i className="pi pi-discord text-white text-5xl"></i>
              </a>
              <a href="http://twitter/primeng">
                <i className="pi pi-twitter text-white text-5xl"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
