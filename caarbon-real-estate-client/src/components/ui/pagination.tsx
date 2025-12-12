import * as React from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

interface PaginationProps {
  total: number
  currentPage: number
  onPageChange: (page: number) => void
}

export function Pagination({ total, currentPage, onPageChange }: PaginationProps) {
  const pages = Array.from({ length: total }, (_, i) => i + 1)

  return (
    <div className="flex items-center gap-2">
      <Button
        variant="outline"
        size="sm"
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        Précédent
      </Button>

      <div className="flex items-center gap-1">
        {pages.map((page) => (
          <button
            key={page}
            className={cn(
              "w-8 h-8 flex items-center justify-center rounded-md text-sm transition",
              currentPage === page
                ? "bg-primary text-primary-foreground"
                : "hover:bg-muted"
            )}
            onClick={() => onPageChange(page)}
          >
            {page}
          </button>
        ))}
      </div>

      <Button
        variant="outline"
        size="sm"
        disabled={currentPage === total}
        onClick={() => onPageChange(currentPage + 1)}
      >
        Suivant
      </Button>
    </div>
  )
}
