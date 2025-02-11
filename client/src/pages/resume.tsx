import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function Resume() {
  const handleDownload = () => {
    // Replace with your actual resume file path
    const link = document.createElement('a');
    link.href = '/path-to-your-resume.pdf';
    link.download = 'Raunak-Garhwal-Resume.pdf';
    link.click();
  };

  return (
    <div className="min-h-screen py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-4xl font-bold">Resume</h1>
            <Button onClick={handleDownload} className="gap-2">
              <Download className="h-4 w-4" />
              Download PDF
            </Button>
          </div>

          <Card className="mb-8">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-semibold mb-4">Education</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold">Master of Computer Applications (MCA)</h3>
                  <p className="text-sm text-muted-foreground">University Name • 2023 - 2025</p>
                </div>
                <div>
                  <h3 className="font-semibold">Bachelor of Commerce (B.Com)</h3>
                  <p className="text-sm text-muted-foreground">University Name • 2020 - 2023</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-semibold mb-4">Skills</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <h3 className="font-semibold">Programming Languages</h3>
                  <ul className="text-sm text-muted-foreground">
                    <li>JavaScript (ES6+)</li>
                    <li>TypeScript</li>
                    <li>Python</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold">Frontend</h3>
                  <ul className="text-sm text-muted-foreground">
                    <li>React.js</li>
                    <li>HTML5 & CSS3</li>
                    <li>Tailwind CSS</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold">Tools & Technologies</h3>
                  <ul className="text-sm text-muted-foreground">
                    <li>Git & GitHub</li>
                    <li>VS Code</li>
                    <li>Node.js</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
