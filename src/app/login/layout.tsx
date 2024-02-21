import AuthLayout from "../components/AuthLayout"

export default function LoginLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <AuthLayout title="Sign in to your account">
            {children}
        </AuthLayout>
    )
}

