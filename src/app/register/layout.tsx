import AuthLayout from "../components/AuthLayout"

export default function LoginLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <AuthLayout title="Register">
            {children}
        </AuthLayout>
    )
}

