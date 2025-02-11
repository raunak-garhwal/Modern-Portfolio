import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useToast } from "@/hooks/use-toast";

export default function Resume() {
  const { toast } = useToast();

  const handleDownload = () => {
    // Once the PDF is uploaded, this will be the path to your resume
    const resumePath = '/path-to-your-resume.pdf';

    try {
      const link = document.createElement('a');
      link.href = resumePath;
      link.download = 'Raunak-Garhwal-Resume.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      toast({
        title: "Download failed",
        description: "The resume file is not available yet. Please try again later.",
        variant: "destructive",
      });
    }
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
              <Alert>
                <AlertDescription>
                  The resume preview will be available once the PDF file is uploaded. 
                  You can still download the resume using the button above.
                </AlertDescription>
              </Alert>

              {/* PDF Preview Area - Will be populated once PDF is uploaded */}
              <div className="mt-6 aspect-[8.5/11] bg-accent/5 rounded-lg flex items-center justify-center">
                <p className="text-muted-foreground">Resume preview will appear here</p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}