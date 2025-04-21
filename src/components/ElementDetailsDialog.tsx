
import React from 'react';
import { Element } from '@/data/elements';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface ElementDetailsDialogProps {
  element: Element | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ElementDetailsDialog: React.FC<ElementDetailsDialogProps> = ({
  element,
  open,
  onOpenChange,
}) => {
  if (!element) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <span className="text-2xl font-bold">{element.symbol}</span>
            <span className="text-xl">({element.name})</span>
          </DialogTitle>
          <DialogDescription>
            <div className="mt-4 space-y-4">
              <div>
                <p className="text-sm text-gray-500">Atomic Number</p>
                <p className="font-medium">{element.number}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Atomic Mass</p>
                <p className="font-medium">{element.atomicMass} u</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Category</p>
                <p className="font-medium capitalize">{element.category.replace(/-/g, ' ')}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Location</p>
                <p className="font-medium">Group {element.group || 'N/A'}, Period {element.period}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Fun Facts</p>
                <p className="text-sm">{element.funFacts}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Common Uses</p>
                <p className="text-sm">{element.uses}</p>
              </div>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default ElementDetailsDialog;
