import React from "react"

const Alert = React.forwardRef(({ className, variant = "default", ...props }, ref) => {
  const baseClasses = "relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+*]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground"
  const variantClasses = {
    default: "bg-background text-foreground",
    destructive: "bg-[#fcbcb7] border-[#fcbcb7] text-[#fa0404] [&>svg]:text-[#fa0404]"
  }

  return (
    <div
      ref={ref}
      role="alert"
      className={`${baseClasses} ${variantClasses[variant]} ${className || ''}`}
      {...props}
    />
  )
})

const AlertTitle = React.forwardRef(({ className, ...props }, ref) => (
  <h5
    ref={ref}
    className={`mb-1 font-medium leading-none tracking-tight ${className || ''}`}
    {...props}
  />
))

const AlertDescription = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={`text-sm [&_p]:leading-relaxed ${className || ''}`}
    {...props}
  />
))

Alert.displayName = "Alert"
AlertTitle.displayName = "AlertTitle"
AlertDescription.displayName = "AlertDescription"

export { Alert, AlertTitle, AlertDescription }
