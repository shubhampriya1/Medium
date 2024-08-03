import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <Navbar />
      <div className="dark:bg-background dark:text-foreground">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6 space-y-6 md:space-y-10">
            <div className="grid gap-4 md:grid-cols-2 md:gap-8">
              <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                  Discover the Latest Insights on Our Blog
                </h1>
                <p className="text-muted-foreground md:text-xl">
                  Stay up-to-date with the latest trends, tips, and industry
                  insights from our expert writers.
                </p>
                <Link
                  href="/blogs"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                >
                  Read the Blog
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter text-foreground sm:text-4xl">
                  Featured Posts
                </h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  Check out our latest and greatest blog posts.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="w-full">
                  <img
                    src="/placeholder.svg"
                    alt="Blog Post Image"
                    className="rounded-t-lg object-cover"
                    width="300"
                    height="200"
                    style={{ aspectRatio: "300/200", objectFit: "cover" }}
                  />
                  <CardContent className="p-4">
                    <h3 className="text-lg font-semibold text-foreground">
                      Mastering React Hooks
                    </h3>
                    <p className="text-muted-foreground">
                      Dive into the power of React Hooks and learn how to
                      leverage them to build more efficient and maintainable
                      applications.
                    </p>
                  </CardContent>
                  <CardFooter className="p-4">
                    <Link
                      href="#"
                      className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                      prefetch={false}
                    >
                      Read More
                    </Link>
                  </CardFooter>
                </Card>
                <Card className="w-full">
                  <img
                    src="/placeholder.svg"
                    alt="Blog Post Image"
                    className="rounded-t-lg object-cover"
                    width="300"
                    height="200"
                    style={{ aspectRatio: "300/200", objectFit: "cover" }}
                  />
                  <CardContent className="p-4">
                    <h3 className="text-lg font-semibold text-foreground">
                      Optimizing Website Performance
                    </h3>
                    <p className="text-muted-foreground">
                      Learn proven techniques to improve the speed and
                      responsiveness of your website, providing a better user
                      experience.
                    </p>
                  </CardContent>
                  <CardFooter className="p-4">
                    <Link
                      href="#"
                      className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                      prefetch={false}
                    >
                      Read More
                    </Link>
                  </CardFooter>
                </Card>
                <Card className="w-full">
                  <img
                    src="/placeholder.svg"
                    alt="Blog Post Image"
                    className="rounded-t-lg object-cover"
                    width="300"
                    height="200"
                    style={{ aspectRatio: "300/200", objectFit: "cover" }}
                  />
                  <CardContent className="p-4">
                    <h3 className="text-lg font-semibold text-foreground">
                      Designing Accessible Interfaces
                    </h3>
                    <p className="text-muted-foreground">
                      Explore best practices and techniques for creating
                      inclusive and accessible user interfaces that cater to
                      diverse user needs.
                    </p>
                  </CardContent>
                  <CardFooter className="p-4">
                    <Link
                      href="#"
                      className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                      prefetch={false}
                    >
                      Read More
                    </Link>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter text-foreground sm:text-4xl">
                  Subscribe to Our Newsletter
                </h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Stay up-to-date with the latest blog posts, tips, and industry
                  insights.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex gap-2">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="max-w-lg flex-1"
                  />
                  <Button type="submit">Subscribe</Button>
                </form>
                <p className="text-xs text-muted-foreground">
                  We respect your privacy. Your email address will not be shared
                  with any third parties.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default HomePage;
