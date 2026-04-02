import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { PropertyTheme } from "@/types/property";
import { PropertyThemeProvider } from "@/contexts/PropertyThemeContext";
import { sampleProperty } from "@/data/sample-property";
import { puneProperty } from "@/data/pune-property";
import AdCampaignTemplate from "@/templates/AdCampaignTemplate";
import ProjectShowcaseTemplate from "@/templates/ProjectShowcaseTemplate";
import InventoryTemplate from "@/templates/InventoryTemplate";

const themes: { id: PropertyTheme; label: string; color: string }[] = [
  { id: "teal", label: "Teal", color: "hsl(168, 55%, 38%)" },
  { id: "navy", label: "Navy", color: "hsl(220, 60%, 35%)" },
  { id: "emerald", label: "Emerald", color: "hsl(152, 55%, 34%)" },
  { id: "amber", label: "Amber", color: "hsl(28, 70%, 45%)" },
  { id: "slate", label: "Slate", color: "hsl(215, 25%, 32%)" },
];

const templates = [
  { id: "ad", label: "Ad Campaign", description: "High-conversion, short-form" },
  { id: "showcase", label: "Showcase", description: "Premium presentation" },
  { id: "inventory", label: "Inventory", description: "Detail-oriented" },
] as const;

const projects = [
  { id: "bangalore", label: "Bangalore — Skyline Residences" },
  { id: "pune", label: "Pune — Urbania Heights" },
];

type TemplateId = typeof templates[number]["id"];

const PropertyDemoPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const templateParam = (searchParams.get("template") || "showcase") as TemplateId;
  const themeParam = (searchParams.get("theme") || "teal") as PropertyTheme;
  const projectParam = searchParams.get("project") || "pune";

  const [activeTemplate, setActiveTemplate] = useState<TemplateId>(templateParam);
  const [activeTheme, setActiveTheme] = useState<PropertyTheme>(themeParam);
  const [activeProject, setActiveProject] = useState(projectParam);

  const updateParams = (template: TemplateId, theme: PropertyTheme, project: string) => {
    setSearchParams({ template, theme, project });
  };

  const handleTemplateChange = (t: TemplateId) => {
    setActiveTemplate(t);
    updateParams(t, activeTheme, activeProject);
  };

  const handleThemeChange = (t: PropertyTheme) => {
    setActiveTheme(t);
    updateParams(activeTemplate, t, activeProject);
  };

  const handleProjectChange = (p: string) => {
    setActiveProject(p);
    updateParams(activeTemplate, activeTheme, p);
  };

  const baseData = activeProject === "pune" ? puneProperty : sampleProperty;
  const data = { ...baseData, theme: activeTheme };

  return (
    <PropertyThemeProvider theme={activeTheme}>
      {/* Floating control panel — hidden on ad template for clean demo */}
      <div className={`fixed top-16 right-4 z-50 bg-background/95 backdrop-blur-sm rounded-2xl shadow-elevated border border-border/50 p-3 space-y-3 max-w-[200px] ${activeTemplate === "ad" ? "hidden" : ""}`}>
        {/* Project selector */}
        <div>
          <p className="text-[10px] font-body font-medium text-muted-foreground uppercase tracking-wider mb-1.5">Project</p>
          <div className="space-y-1">
            {projects.map((p) => (
              <button
                key={p.id}
                onClick={() => handleProjectChange(p.id)}
                className={`w-full text-left px-2.5 py-1.5 rounded-lg text-xs font-body transition-colors ${
                  activeProject === p.id
                    ? "bg-primary text-primary-foreground font-medium"
                    : "text-foreground hover:bg-muted"
                }`}
              >
                {p.label}
              </button>
            ))}
          </div>
        </div>

        <div className="border-t border-border/50 pt-3">
          <p className="text-[10px] font-body font-medium text-muted-foreground uppercase tracking-wider mb-1.5">Template</p>
          <div className="space-y-1">
            {templates.map((t) => (
              <button
                key={t.id}
                onClick={() => handleTemplateChange(t.id)}
                className={`w-full text-left px-2.5 py-1.5 rounded-lg text-xs font-body transition-colors ${
                  activeTemplate === t.id
                    ? "bg-primary text-primary-foreground font-medium"
                    : "text-foreground hover:bg-muted"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        <div className="border-t border-border/50 pt-3">
          <p className="text-[10px] font-body font-medium text-muted-foreground uppercase tracking-wider mb-1.5">Theme</p>
          <div className="flex gap-1.5 flex-wrap">
            {themes.map((t) => (
              <button
                key={t.id}
                onClick={() => handleThemeChange(t.id)}
                className={`w-7 h-7 rounded-full border-2 transition-transform hover:scale-110 active:scale-95 ${
                  activeTheme === t.id ? "border-foreground scale-110" : "border-transparent"
                }`}
                style={{ backgroundColor: t.color }}
                title={t.label}
              />
            ))}
          </div>
        </div>

        <div className="border-t border-border/50 pt-2">
          <Link to="/" className="text-[10px] text-muted-foreground hover:text-foreground font-body transition-colors">
            ← Back to Realty Connect
          </Link>
        </div>
      </div>

      {/* Render active template */}
      {activeTemplate === "ad" && <AdCampaignTemplate data={data} />}
      {activeTemplate === "showcase" && <ProjectShowcaseTemplate data={data} />}
      {activeTemplate === "inventory" && <InventoryTemplate data={data} />}
    </PropertyThemeProvider>
  );
};

export default PropertyDemoPage;
