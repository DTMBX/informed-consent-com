import { ComponentProps } from "react"
import XIcon from "lucide-react/dist/esm/icons/x"
import { cn } from "@/lib/utils"

}: ComponentProps<typeof DialogP

function DialogTr
  ...props
}: ComponentProps<typeof DialogPrimitive.Root>) {
  return <DialogPrimitive.Root data-slot="dialog" {...props} />
}

function DialogTrigger({
  ...props
}: ComponentProps<typeof DialogPrimitive.Trigger>) {
  return <DialogPrimitive.Trigger data-slot="dialog-trigger" {...props} />
}

function DialogPortal({
  ...props
}: ComponentProps<typeof DialogPrimitive.Portal>) {
  return <DialogPrimitive.Portal data-slot="dialog-portal" {...props} />
}

function DialogClose({
  ...props
}: ComponentProps<typeof DialogPrimitive.Close>) {
  return <DialogPrimitive.Close data-slot="dialog-close" {...props} />
}

function DialogOverlay({
  className,
  ...props
}: ComponentProps<typeof DialogPrimitive.Overlay>) {
  return (
    <DialogPrimitive.Overlay
      data-slot="dialog-overlay"
      className={cn(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
function DialogCo
  childr
}: ComponentProp
    <D
   
 

        {...props}
        {chi
          <
        </
    </DialogPortal>
}
function DialogHeader({ className, ...props 
    <div
      className={cn("flex flex
    />
}
function DialogFooter({ className, ...props }: ComponentProps<"div">) {
    <div
      clas
        className
      {
  )

  className,
}: ComponentProps<typeof DialogPrimitive.Title>)
    <DialogPrimitive.Title
      className={cn("text-lg lea
    />
}
f

  return (
      data
      {.
  )

  Dialog,
  Dial
  D
 

}


















































