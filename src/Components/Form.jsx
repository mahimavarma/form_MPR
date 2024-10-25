import React, { useState } from "react";
import Button from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/RadioGroup";
import { Loader2, AlertCircle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"; // Modal components

export default function LaptopRecommendationSystemModal() {
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [preferences, setPreferences] = useState({
    primaryUse: "",
    performanceRequirements: "",
    operatingSystem: "",
    portability: "",
    screenSize: "",
    displayResolution: "",
  });

  const totalSteps = 6;

  const laptopRecommendations = [
    {
      name: "MacBook Air",
      use: "work",
      performance: "basic",
      os: "mac",
      portability: "very_important",
      size: "13_inch",
      resolution: "full_hd",
    },
    {
      name: "Dell XPS 15",
      use: "design",
      performance: "heavy",
      os: "windows",
      portability: "somewhat_important",
      size: "15_inch",
      resolution: "4k",
    },
    {
      name: "ASUS ROG Zephyrus",
      use: "gaming",
      performance: "heavy",
      os: "windows",
      portability: "not_important",
      size: "17_inch",
      resolution: "quad_hd",
    },
    {
      name: "Lenovo ThinkPad X1",
      use: "programming",
      performance: "multitasking",
      os: "linux",
      portability: "very_important",
      size: "13_inch",
      resolution: "full_hd",
    },
  ];

  const getRecommendations = () => {
    return laptopRecommendations.filter(
      (laptop) =>
        laptop.use === preferences.primaryUse &&
        laptop.performance === preferences.performanceRequirements &&
        laptop.os === preferences.operatingSystem &&
        laptop.portability === preferences.portability &&
        laptop.size === preferences.screenSize &&
        laptop.resolution === preferences.displayResolution
    );
  };

  const handleNext = () => {
    const currentPreference = Object.keys(preferences)[step - 1];
    if (preferences[currentPreference] === "") {
      setShowAlert(true);
      return;
    }

    setShowAlert(false);
    if (step < totalSteps) {
      setStep(step + 1);
    } else {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        setStep(totalSteps + 1);
      }, 2000);
    }
  };

  const handlePrevious = () => {
    if (step > 1) {
      setStep(step - 1);
    }
    setShowAlert(false);
  };

  const handleInputChange = (name, value) => {
    setPreferences({ ...preferences, [name]: value });
    setShowAlert(false);
  };

  const renderQuestion = () => {
    switch (step) {
      case 1:
        return (
          <>
            <CardTitle className="text-[#615EFC] text-2xl font-bold mb-2">
              What's your primary use for the laptop?
            </CardTitle>
            <CardDescription className="text-[#7E8EF1] mb-4">
              Select the option that best describes your needs.
            </CardDescription>
            <RadioGroup
              value={preferences.primaryUse}
              onValueChange={(value) => handleInputChange("primaryUse", value)}
              className="space-y-2"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="work" id="work" />
                <Label htmlFor="work" className="text-[#7E8EF1]">
                  Work/Office (Documents, emails, spreadsheets)
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="gaming" id="gaming" />
                <Label htmlFor="gaming" className="text-[#7E8EF1]">
                  Gaming
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="design" id="design" />
                <Label htmlFor="design" className="text-[#7E8EF1]">
                  Graphic Design / Video Editing
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="programming" id="programming" />
                <Label htmlFor="programming" className="text-[#7E8EF1]">
                  Programming / Development
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="study" id="study" />
                <Label htmlFor="study" className="text-[#7E8EF1]">
                  Online Classes / Study
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="general" id="general" />
                <Label htmlFor="general" className="text-[#7E8EF1]">
                  General Use (Browsing, Streaming, Social Media)
                </Label>
              </div>
            </RadioGroup>
          </>
        );
      case 2:
        return (
          <>
            <CardTitle className="text-[#615EFC] text-2xl font-bold mb-2">
              How important is high performance for you?
            </CardTitle>
            <CardDescription className="text-[#7E8EF1] mb-4">
              Select your performance requirements.
            </CardDescription>
            <RadioGroup
              value={preferences.performanceRequirements}
              onValueChange={(value) => handleInputChange("performanceRequirements", value)}
              className="space-y-2"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="basic" id="basic" />
                <Label htmlFor="basic" className="text-[#7E8EF1]">
                  Basic tasks (browsing, documents)
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="multitasking" id="multitasking" />
                <Label htmlFor="multitasking" className="text-[#7E8EF1]">
                  Multitasking (multiple apps, tabs open)
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="heavy" id="heavy" />
                <Label htmlFor="heavy" className="text-[#7E8EF1]">
                  Heavy performance (video editing, gaming)
                </Label>
              </div>
            </RadioGroup>
          </>
        );
      case 3:
        return (
          <>
            <CardTitle className="text-[#615EFC] text-2xl font-bold mb-2">
              Which operating system do you prefer?
            </CardTitle>
            <CardDescription className="text-[#7E8EF1] mb-4">
              Select your preferred operating system.
            </CardDescription>
            <RadioGroup
              value={preferences.operatingSystem}
              onValueChange={(value) => handleInputChange("operatingSystem", value)}
              className="space-y-2"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="windows" id="windows" />
                <Label htmlFor="windows" className="text-[#7E8EF1]">
                  Windows
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="mac" id="mac" />
                <Label htmlFor="mac" className="text-[#7E8EF1]">
                  MacOS
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="linux" id="linux" />
                <Label htmlFor="linux" className="text-[#7E8EF1]">
                  Linux
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="chromeos" id="chromeos" />
                <Label htmlFor="chromeos" className="text-[#7E8EF1]">
                  Chrome OS
                </Label>
              </div>
            </RadioGroup>
          </>
        );
      case 4:
        return (
          <>
            <CardTitle className="text-[#615EFC] text-2xl font-bold mb-2">
              How important is portability for you?
            </CardTitle>
            <CardDescription className="text-[#7E8EF1] mb-4">
              Select your preference for portability.
            </CardDescription>
            <RadioGroup
              value={preferences.portability}
              onValueChange={(value) => handleInputChange("portability", value)}
              className="space-y-2"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="very_important" id="very_important" />
                <Label htmlFor="very_important" className="text-[#7E8EF1]">
                  Very Important
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="somewhat_important" id="somewhat_important" />
                <Label htmlFor="somewhat_important" className="text-[#7E8EF1]">
                  Somewhat Important
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="not_important" id="not_important" />
                <Label htmlFor="not_important" className="text-[#7E8EF1]">
                  Not Important
                </Label>
              </div>
            </RadioGroup>
          </>
        );
      case 5:
        return (
          <>
            <CardTitle className="text-[#615EFC] text-2xl font-bold mb-2">
              What screen size do you prefer?
            </CardTitle>
            <CardDescription className="text-[#7E8EF1] mb-4">
              Select your preferred screen size.
            </CardDescription>
            <RadioGroup
              value={preferences.screenSize}
              onValueChange={(value) => handleInputChange("screenSize", value)}
              className="space-y-2"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="13_inch" id="13_inch" />
                <Label htmlFor="13_inch" className="text-[#7E8EF1]">
                  13 inches
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="15_inch" id="15_inch" />
                <Label htmlFor="15_inch" className="text-[#7E8EF1]">
                  15 inches
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="17_inch" id="17_inch" />
                <Label htmlFor="17_inch" className="text-[#7E8EF1]">
                  17 inches
                </Label>
              </div>
            </RadioGroup>
          </>
        );
      case 6:
        return (
          <>
            <CardTitle className="text-[#615EFC] text-2xl font-bold mb-2">
              What display resolution do you prefer?
            </CardTitle>
            <CardDescription className="text-[#7E8EF1] mb-4">
              Select your preferred display resolution.
            </CardDescription>
            <RadioGroup
              value={preferences.displayResolution}
              onValueChange={(value) => handleInputChange("displayResolution", value)}
              className="space-y-2"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="full_hd" id="full_hd" />
                <Label htmlFor="full_hd" className="text-[#7E8EF1]">
                  Full HD (1080p)
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="quad_hd" id="quad_hd" />
                <Label htmlFor="quad_hd" className="text-[#7E8EF1]">
                  Quad HD (1440p)
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="4k" id="4k" />
                <Label htmlFor="4k" className="text-[#7E8EF1]">
                  4K Ultra HD
                </Label>
              </div>
            </RadioGroup>
          </>
        );
      case totalSteps + 1:
        const recommendations = getRecommendations();
        return (
          <>
            <CardTitle className="text-[#615EFC] text-2xl font-bold mb-2">
              Recommended Laptops
            </CardTitle>
            {recommendations.length > 0 ? (
              <ul className="text-[#7E8EF1]">
                {recommendations.map((laptop, index) => (
                  <li key={index}>{laptop.name}</li>
                ))}
              </ul>
            ) : (
              <p className="text-[#7E8EF1]">No recommendations found based on your preferences.</p>
            )}
          </>
        );
      default:
        return null;
    }
  };

  return (
    <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
      <DialogTrigger asChild>
        <Button className="bg-[#615EFC] hover:bg-[#7E8EF1]">
          Open Laptop Recommendation System
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-[#615EFC]">Laptop Recommendation System</DialogTitle>
        </DialogHeader>
        {showAlert && (
          <Alert variant="destructive">
            <AlertTitle>Missing Information</AlertTitle>
            <AlertDescription>Please answer the question before proceeding.</AlertDescription>
          </Alert>
        )}
        <Card>
          <CardHeader>
            {isLoading ? (
              <Loader2 className="animate-spin" />
            ) : (
              renderQuestion()
            )}
          </CardHeader>
          <CardContent className="flex justify-between mt-4">
            <Button onClick={handlePrevious} disabled={step === 1}>
              Previous
            </Button>
            <Button onClick={handleNext}>
              {step === totalSteps ? "Finish" : "Next"}
            </Button>
          </CardContent>
        </Card>
      </DialogContent>
    </Dialog>
  );
}
