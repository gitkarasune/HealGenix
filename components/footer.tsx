import {
  SiLinkedin,
  SiX,
  SiFacebook,
  SiInstagram,
  SiYoutube,
  SiMedium,
} from "react-icons/si";

export default function Footer() {
  return (
    <footer className="py-8">
      <div className="container max-w-[800px] mx-auto">
        <div className="md:flex md:items-center md:justify-between md:flex-row-reverse">
          <div className="flex justify-center space-x-6 md:order-2">
            <a
              href="https://x.com"
              target="_blank"
              rel="noreferrer noopener"
              className="text-muted-foreground hover:text-foreground"
            >
              <span className="sr-only">X</span>
              <SiX aria-hidden="true" className="h-5 w-5" />
            </a>
            <a
              href="https://web.facebook.com"
              target="_blank"
              rel="noreferrer noopener"
              className="text-muted-foreground hover:text-foreground"
            >
              <span className="sr-only">Facebook</span>
              <SiFacebook aria-hidden="true" className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com/in"
              target="_blank"
              rel="noreferrer noopener"
              className="text-muted-foreground hover:text-foreground"
            >
              <span className="sr-only">Linkedin</span>
              <SiLinkedin aria-hidden="true" className="h-5 w-5" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noreferrer noopener"
              className="text-muted-foreground hover:text-foreground"
            >
              <span className="sr-only">Youtube</span>
              <SiYoutube aria-hidden="true" className="h-5 w-5" />
            </a>
            <a
              href="https://medium.dev"
              target="_blank"
              rel="noreferrer noopener"
              className="text-muted-foreground hover:text-foreground"
            >
              <span className="sr-only">Medium</span>
              <SiMedium aria-hidden="true" className="h-5 w-5" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer noopener"
              className="text-muted-foreground hover:text-foreground"
            >
              <span className="sr-only">Instgram</span>
              <SiInstagram aria-hidden="true" className="h-5 w-5" />
            </a>
            
          </div>
          <div className="mt-8 md:order-11 md:mt-0">
            <p className="text-center text-sm leading-5 text-muted-foreground">
              &copy;{new Date().getFullYear()}{" "}
              <span>All Right Reserved</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
