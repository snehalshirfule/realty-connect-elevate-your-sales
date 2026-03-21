import { PropertyData } from "@/types/property";

interface Props {
  data: PropertyData;
}

const PropertyFooter = ({ data }: Props) => {
  return (
    <footer className="py-8 md:py-10 px-4 sm:px-6 bg-foreground text-background/80 pb-20 md:pb-10">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-7 h-7 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-heading font-bold text-[10px]">RC</span>
              </div>
              <span className="font-heading font-bold text-background text-sm">Realty Connect</span>
            </div>
            <p className="text-xs text-background/40 font-body">
              {data.projectName} by {data.developerName}
              {data.reraNumber && <> · {data.reraNumber}</>}
            </p>
          </div>

          <div className="text-right">
            <p className="text-xs text-background/40 font-body mb-1">
              Powered by Realty Connect · A product by Devascend
            </p>
            <p className="text-[11px] text-background/30 font-body">
              © {new Date().getFullYear()} All rights reserved. Content for informational purposes only.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default PropertyFooter;
