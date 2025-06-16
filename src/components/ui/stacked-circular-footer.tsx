import { Button } from "@/components/ui/button"
import { Github, MessageCircle, Send, Twitter } from "lucide-react"

function StackedCircularFooter() {
  return (
    <footer className="bg-background py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center">
          <div className="mb-8 flex space-x-4">
            <Button variant="outline" size="icon" className="rounded-full" asChild>
              <a 
                href="https://github.com/silnt-awaken/wagus_app" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Github className="h-4 w-4" />
                <span className="sr-only">Github</span>
              </a>
            </Button>
            <Button variant="outline" size="icon" className="rounded-full" asChild>
              <a 
                href="https://x.com/WAGUS_APP/" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Twitter className="h-4 w-4" />
                <span className="sr-only">X</span>
              </a>
            </Button>
            <Button variant="outline" size="icon" className="rounded-full" asChild>
              <a 
                href="https://discord.gg/ypPzNgJNXC" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <MessageCircle className="h-4 w-4" />
                <span className="sr-only">Discord</span>
              </a>
            </Button>
            <Button variant="outline" size="icon" className="rounded-full" asChild>
              <a 
                href="http://t.me/WAGUSAPP" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Send className="h-4 w-4" />
                <span className="sr-only">Telegram</span>
              </a>
            </Button>
          </div>
          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} WAGUS. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export { StackedCircularFooter }