import { MainLayout } from "../layouts";
import { Button, Card, CardHeader, Input } from "../components";

export function HomePage() {
    return (
        <MainLayout>
            <div className="space-y-8">
                {/* Hero Section */}
                <section className="py-12 text-center">
                    <h1 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white md:text-5xl">
                        Welcome to{" "}
                        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            React App
                        </span>
                    </h1>
                    <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300">
                        A modern React application built with Vite, TailwindCSS, and React
                        Query. Start building amazing user experiences.
                    </p>
                    <div className="mt-8 flex justify-center gap-4">
                        <Button variant="primary" size="lg">
                            Get Started
                        </Button>
                        <Button variant="outline" size="lg">
                            Learn More
                        </Button>
                    </div>
                </section>

                {/* Features Section */}
                <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    <Card>
                        <CardHeader
                            title="React Query"
                            subtitle="Powerful data fetching"
                        />
                        <p className="text-gray-600 dark:text-gray-300">
                            Built-in hooks for fetching, caching, and updating server state in your React applications.
                        </p>
                    </Card>

                    <Card>
                        <CardHeader
                            title="TailwindCSS"
                            subtitle="Utility-first styling"
                        />
                        <p className="text-gray-600 dark:text-gray-300">
                            A utility-first CSS framework for rapidly building custom user interfaces.
                        </p>
                    </Card>

                    <Card>
                        <CardHeader
                            title="JavaScript"
                            subtitle="Simple and flexible"
                        />
                        <p className="text-gray-600 dark:text-gray-300">
                            Pure JavaScript with JSX for easier development without type complexity.
                        </p>
                    </Card>
                </section>

                {/* Demo Section */}
                <section>
                    <Card>
                        <CardHeader
                            title="Component Demo"
                            subtitle="See our components in action"
                        />
                        <div className="space-y-6">
                            <div className="flex flex-wrap gap-2">
                                <Button variant="primary" size="sm">Primary</Button>
                                <Button variant="secondary" size="sm">Secondary</Button>
                                <Button variant="outline" size="sm">Outline</Button>
                                <Button variant="ghost" size="sm">Ghost</Button>
                                <Button variant="danger" size="sm">Danger</Button>
                            </div>

                            <div className="grid gap-4 md:grid-cols-2">
                                <Input label="Email" placeholder="Enter your email" type="email" />
                                <Input label="Password" placeholder="Enter your password" type="password" />
                            </div>

                            <Input
                                label="With Error"
                                placeholder="Invalid input"
                                error="This field is required"
                            />

                            <Input
                                label="With Helper Text"
                                placeholder="example@email.com"
                                helperText="We'll never share your email with anyone else."
                            />
                        </div>
                    </Card>
                </section>
            </div>
        </MainLayout>
    );
}
